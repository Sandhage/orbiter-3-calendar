class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|

      t.date    :date,    null: false
      t.integer :user_id, null: false

      t.timestamps        null: false
    end
  end
end
