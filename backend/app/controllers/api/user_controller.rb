class Api::UserController < ApplicationController

    
    def index 
       users = User.all
       render json: {status: :success, users: users}
    end

    def create 
        user = User.new(user_params)
        # byebug
        if user.save 
            render json: {status: :created, user: user}
        else
            render json: {status:500, errors: user.errors.full_messages }
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username)
    end
end
