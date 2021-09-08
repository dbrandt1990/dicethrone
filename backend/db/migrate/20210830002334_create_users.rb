class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :rank
      t.integer :wins
      t.integer :losses

      t.timestamps
    end
  end
end
