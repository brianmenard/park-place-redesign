class AddColumnsToListing < ActiveRecord::Migration[5.0]
  def change

    add_column :listings, :unit, :string
    add_column :listings, :bedrooms, :string
    add_column :listings, :bathrooms, :string
    add_column :listings, :price, :string
    add_column :listings, :description, :text

  end
end
