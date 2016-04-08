class AddFormColumnsToDays < ActiveRecord::Migration
  def change
    add_column :days, :name, :string,             null: false, default: ""
    add_column :days, :donation_amount, :integer, null: false, default: 0
    add_column :days, :message, :string,          null: false, default: ""
  end
end
