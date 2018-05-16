require 'test_helper'

class TetrisControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tetris_index_url
    assert_response :success
  end

end
