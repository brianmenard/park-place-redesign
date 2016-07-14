class ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json: @listings.to_json
  end

  def create
    Listing.create(params)
  end

end
