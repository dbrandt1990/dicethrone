Rails.application.routes.draw do
  namespace :api do
  #  may need a route to find users, so we can confirm they exist and get their ids before createing a game
   resources :user, only: [:index, :create, :delete]
   resources :game, only: [:create, :delete]
  end
end
