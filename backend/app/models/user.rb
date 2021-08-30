class User < ApplicationRecord
    has_many :games, through: :users_games
end
