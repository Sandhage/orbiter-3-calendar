class DaysController < ApplicationController
  def index
    @claimed_days = Day.all
  end
  
  def show
    @claimed_day  = Day.find(params[:id])
  end
  
  def show_unclaimed
    @date = params[:format]
  end
  
  def active_day
    @claimed_day = Day.find(params[:id])
  end
  
  def create
    # logger.debug(claimed_day_params)
    @claimed_day = Day.new(claimed_day_params)
    @claimed_day.user_id = current_user.id
    
    if @claimed_day.save
      redirect_to @claimed_day
    else
      flash[:alert] = 'Oops! Looks like that didn\'t work -- let\'s try again...'
      render 'new'
    end
  end
  
  def new
    @claimed_day       = Day.new
    @claimed_day.date  = params[:format]
  end
  
  # def claim_day
  #   @claimed_day         = Day.new
  #   @claimed_day.user_id = current_user.id
  #   @claimed_day.date    = params[:format]
    
  #   if @claimed_day.save
  #     redirect_to root_path
  #   end
  # end
  
  def confirm_donation
    @day = Day.find(params[:id])
    @day.donation_confirmed = true
    @day.save
    
    redirect_to admin_dashboard_path
  end
  
  def destroy
    @day = Day.find(params[:id])
    @day.destroy
  
    redirect_to root_path
  end
  
  private
  def claimed_day_params
    params.require(:day).permit(:name, :date, :donation_amount, :message)
    # params.require(:claimed_day).permit(:name, :date, :donation_amount, :message)  
  end
end
