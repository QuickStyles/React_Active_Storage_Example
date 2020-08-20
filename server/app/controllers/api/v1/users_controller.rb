class Api::V1::UsersController < ApplicationController
  
  def create
    user = User.new params.permit(:name, :profile_picture)
    user.save
    # use a serializer instead of building a response below
    response = {
      name: user.name,
      profile_picture: url_for(user.profile_picture)
    }
    render json: response
  end
end
