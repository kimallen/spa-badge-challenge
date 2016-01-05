class Badge < ActiveRecord::Base
  belongs_to :user

  validates :name, :score, presence: true
end
