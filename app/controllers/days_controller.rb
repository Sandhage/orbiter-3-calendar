class DaysController < ApplicationController
  def index
    @claimed_days = Day.all
  end
  
  def claim_day
    puts "JLHAJHSADKJHAFDKJLHASD;LHASFDKLH;ASDF;KJLASDF;KJLASDF;KJASDF;KJLASDF;KJLASDFKJL;ASDFKJL"
    puts params[:format]
    
    @claimed_day = Day.new
    
    @claimed_day.user_id = current_user.id
    @claimed_day.date = params[:format]
    
    if @claimed_day.save
      redirect_to root_path
    end
  end
end
