class Api::UserController < ApplicationController

    
    def index 
       users = User.all
       render json: {status: :success, users: users}
    end

    def create 
        user = User.new({username: params[:username]})
        
        if user.save 
            render json: {status: :created, user: user}
        else
            render json: {status:500, errors: user.errors.full_messages }
        end
    end

    def update 
        user = User.find(params[:id])
        if user.wins != params[:wins]
            user.update({wins: params[:wins]})
        
        elsif user.losses != params[:losses]
            user.update({losses: params[:losses]})
        end
    end

end
