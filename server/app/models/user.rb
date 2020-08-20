class User < ApplicationRecord
  # setup 1 to 1 mapping between records and files
  # each record can have 1 file attatched
  has_one_attatched :profile_picture
end
