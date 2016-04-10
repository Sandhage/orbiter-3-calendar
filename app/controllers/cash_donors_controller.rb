class CashDonorsController < ApplicationController
  def show
    @cash_donor = CashDonor.find(params[:id])
  end

  def create
    @cash_donor = CashDonor.create(cash_donor_params)
    if @cash_donor.save
      redirect_to @cash_donor
    else
      flash[:alert] = 'Oops! Looks like that didn\'t work -- let\'s try again...'
      render 'new'
    end
  end

  def new
    @cash_donor             = CashDonor.new
    @cash_donor.day_claimed = params[:format] 
  end
  
  def edit
    @cash_donor = CashDonor.find(params[:id])
  end
  
  def update
    @cash_donor = CashDonor.find(params[:id])
    
    if @cash_donor.update_attributes(cash_donor_params)
      redirect_to @cash_donor
    else
      flash[:alert] = 'Oops! Looks like that didn\'t work -- let\'s try again...'
      render 'edit'
    end
  end
  
  def destroy
    @cash_donor = CashDonor.find(params[:id])
    @cash_donor.destroy
  
    redirect_to root_path
  end
  
  private
  def cash_donor_params
    params.require(:cash_donor).permit(:name, :email, :day_claimed, :donation_amount, :message)  
  end
end
