Rails.application.routes.draw do


  namespace :api do
   resources :user, only: [:index, :update, :create, :delete]
  end
end
