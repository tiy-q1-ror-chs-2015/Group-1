class IpController < ApplicationController
  def index
    @ips = Ip.all
    respond_to do |format|
      format.json {render  json: @ips.to_json}
      format.html
    end
  end
  def destroy
    set_ip
    @ip.destroy
    respond_to do |format|
      format.json { render nothing: true}
    end
  end
  def create
    @ip = Ip.new ip_params
    if @ip.save
      respond_to do |format|
        format.json {render json: @ip.to_json}
      end
    else
      respond_to do |format|
        format.json {render json: @ip.errors.full_messages, status: 422}
      end
    end
  end
  def update
    set_ip
    if @ip.update_attributes ip_params
      respond_to do |format|
        format.json { render json: @ip.to_json }
      end 
    else
      respond_to do |format|
        format.json { render json: @ip.errors.full_messages, status: 422 }
      end
    end
  end
private
  def set_ip
    @ip = ip.find params[:id]
  end
  def ip_params
    params.require(:ip).permit(
      :ip_address
    )
  end
end
