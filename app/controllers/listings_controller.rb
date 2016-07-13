class ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json: @listings.to_json
  end

end
