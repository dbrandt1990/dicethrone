class Games < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :P1_id
      t.integer :P2_id
      t.boolean :won
    end
  end
end
