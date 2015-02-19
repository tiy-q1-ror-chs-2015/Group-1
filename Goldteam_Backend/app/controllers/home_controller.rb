class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.json {render json: @contacts.to_json}
      format.html
    end
  end
end
