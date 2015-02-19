class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :address
      t.string :email
      t.string :github
      t.string :twitter
      t.text :photo
      t.string :number
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
