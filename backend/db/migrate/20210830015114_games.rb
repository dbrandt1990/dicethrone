class Games < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :P1_username
      t.string :P2_username
      t.integer :P1_id
      t.integer :P2_id
      t.boolean :won
    end
  end
end
