class Api::V1::UsersController < ApplicationController
  
  def create
    user = User.new params.require(:user).permit(:name, :profile_picture)
    user.save
    render json: user
  end
end
