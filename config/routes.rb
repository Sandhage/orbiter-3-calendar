Rails.application.routes.draw do
  root to: 'days#index'
  devise_for :users
  resources  :users 
  
  
  resources :days do
    collection do
      get '/claim_day' => 'days#claim_day'
    end
  end
end
