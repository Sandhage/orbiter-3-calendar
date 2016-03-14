class CreateCashDonors < ActiveRecord::Migration
  def change
    create_table :cash_donors do |t|
      
      t.string  :name,            null: false, default: ""
      t.string  :email,           null: false, default: ""
      t.date    :day_claimed
      t.integer :donation_amount, null: false, default: 0
      t.string  :message,         null: false, default: ""
      
      t.timestamps null: false
    end
  end
end
