class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :P1
      t.string :P2
      t.boolean :won

      t.timestamps
    end
  end
end
