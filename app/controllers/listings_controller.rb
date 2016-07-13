class ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json: @listings.to_json
  end

  def create
  end

  def update
  end

  def delete
  end

end
