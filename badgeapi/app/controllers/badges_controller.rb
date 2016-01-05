class BadgesController < ApplicationController
  def create
    @badge = Badge.new(badge_params)
    if @badge.save
      render json: @badge, status: :created, location: @badge
    else
      err
    end
  end

  def update
    @badge = Badge.find(params[:id])
    @badge.update(score: @badge.score + params[:vote])
  end

  private


  def badge_params
    params.permit(:name)
  end

  def err
    render json: @badge.errors, status: :unprocessable_entity
  end
end
