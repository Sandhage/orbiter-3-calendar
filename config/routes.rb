Rails.application.routes.draw do
  root to: 'days#index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources  :users 
  resources  :cash_donors
  
  
  # devise_scope :user do
  #   delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  # end
  get 'days/active_day'      => 'days#active_day'
  get '/admin_dashboard' => 'admin#admin_dashboard'
  
  resources :days do
    member do
      get '/active_day' => 'days#active_day'
    end
    collection do
      get '/claim_day' => 'days#claim_day'
    end
  end
end
