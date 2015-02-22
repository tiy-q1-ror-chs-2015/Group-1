class ContactsController < ApplicationController
  def index
    set_ip
    @contacts = Contact.all
    respond_to do |format|
      format.json {render  json: @contacts.to_json}
      format.html
    end
  end
  def destroy
    set_contact
    @contact.destroy
    respond_to do |format|
      format.json { render nothing: true}
    end
  end
  def create
    set_ip
    @contact = Ip.contacts.create contact_params
    if @contact.save
      respond_to do |format|
        format.json {render json: @contact.to_json}
      end
    else
      respond_to do |format|
        format.json {render json: @contact.errors.full_messages, status: 422}
      end
    end
  end
  def update
    set_ip
    set_contact
    if @contact.update_attributes contact_params
      respond_to do |format|
        format.json { render json: @contact.to_json }
      end 
    else
      respond_to do |format|
        format.json { render json: @contact.errors.full_messages, status: 422 }
      end
    end
  end
private
  def set_ip
  @ip = ip.find params[:ip_id]
  end
  def set_contact
    @contact = Contact.find params[:id]
  end
  def contact_params
    params.require(:contact).permit(
      :name,
      :street,
      :street_2,
      :city,
      :state,
      :zip,
      :email,
      :github,
      :twitter,
      :number,
      :photo,
      :note,
      :ip_id
    )
  end
end
