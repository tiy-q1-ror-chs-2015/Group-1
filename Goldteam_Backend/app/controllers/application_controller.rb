class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # before_filter :set_default_response_format


  protect_from_forgery with: :exception
   before_action :configure_permitted_parameters, if: :devise_controller?
   # before_action :authenticate_user!
protected

  def configure_permitted_parameters
    # in case we want to add to sign up and update
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :current_password, :password, :password_confirmation) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :current_password, :password, :password_confirmation) }
  end
private
  def set_default_response_format
    request.format = :json
  end
end
