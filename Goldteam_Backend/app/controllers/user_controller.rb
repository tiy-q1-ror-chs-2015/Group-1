class UserController < ApplicationController
  def index
    @users = User.all
    respond_to do |format|
      format.json {render  json: @users.to_json}
      format.html
    end
  end
  def destroy
    set_user
    @user.destroy
    respond_to do |format|
      format.json { render nothing: true}
    end
  end
  def create
    @user = User.new user_params
    if @user.save
      respond_to do |format|
        format.json {render json: @user.to_json}
      end
    else
      respond_to do |format|
        format.json {render json: @user.errors.full_messages, status: 422}
      end
    end
  end
  def update
    set_user
    if @user.update_attributes user_params
      respond_to do |format|
        format.json { render json: @user.to_json }
      end 
    else
      respond_to do |format|
        format.json { render json: @user.errors.full_messages, status: 422 }
      end
    end
  end
private
  def set_user
    @user = User.find params[:id]
  end
  def user_params
    params.require(:user).permit(
      :username
    )
  end
end
