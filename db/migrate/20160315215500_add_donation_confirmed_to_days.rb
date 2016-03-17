class AddDonationConfirmedToDays < ActiveRecord::Migration
  def change
        add_column :days, :donation_confirmed, :boolean, default: false
  end
end
