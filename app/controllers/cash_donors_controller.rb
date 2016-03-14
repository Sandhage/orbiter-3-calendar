class CashDonorsController < ApplicationController
  def show
    @cash_donor = CashDonor.find(params[:id])
  end

end
