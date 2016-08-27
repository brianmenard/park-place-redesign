class ListingsController < ApplicationController

skip_before_action :verify_authenticity_token

  def index
    @listings = Listing.all
    render json: @listings.to_json
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing.to_json
  end

  def create
    Listing.create(listing_params)
  end

  def listing_params
    params.permit(:unit, :price, :bedrooms, :bathrooms, :description)
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy()
  end

end
