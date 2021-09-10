Rails.application.routes.draw do


  namespace :api do
   resources :user, only: [:index, :create, :delete]
   resources :game, only: [:create, :delete]
  end
end
