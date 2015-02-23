class ContactsController < ApplicationController
  def index
    set_user
    @contacts = Contact.all
    respond_to do |format|
      format.json {render  json: @contacts.to_json}
      format.html
    end
  end
  def destroy
    set_user
    set_contact
    @contact.destroy
    respond_to do |format|
      format.json { render nothing: true}
    end
  end
  def create
    @contact = user.contacts.create contact_params
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
    set_contact
    if @user.contacts.update_attributes contact_params
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
  def set_contact
    @contact = Contact.find params[:id]
  end
  def set_user
    @user = User.find params[:user_id]
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
      :user_id
    )
  end
end
