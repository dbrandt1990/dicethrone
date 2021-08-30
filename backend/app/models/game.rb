class Game < ApplicationRecord
    has_many :users, through: :users_games
end
