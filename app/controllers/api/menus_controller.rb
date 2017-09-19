class Api::MenusController < ApplicationController
  before_action :set_api_menu, only: [:show, :update, :destroy]

  # GET /api/menus
  # GET /api/menus.json
  def index
    @api_menus = Menu.all
  end

  # GET /api/menus/1
  # GET /api/menus/1.json
  def show
  end

  # POST /api/menus
  # POST /api/menus.json
  def create
    @api_menu = Menu.new(api_menu_params)

    if @api_menu.save
      render :show
    else
      render json: @api_menu.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/menus/1
  # PATCH/PUT /api/menus/1.json
  def update
    if @api_menu.update(api_menu_params)
      render :show
    else
      render json: @api_menu.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/menus/1
  # DELETE /api/menus/1.json
  def destroy
    @api_menu.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_menu
      @api_menu = Menu.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_menu_params
      params.fetch(:api_menu, {})
    end
end
