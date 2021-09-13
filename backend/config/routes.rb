Rails.application.routes.draw do


  namespace :api do
   resources :user, only: [:index, :create, :delete]
  end
end
