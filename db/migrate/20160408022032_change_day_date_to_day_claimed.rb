class ChangeDayDateToDayClaimed < ActiveRecord::Migration
  def change
    change_column_null :days, :date, :false
  end
end
