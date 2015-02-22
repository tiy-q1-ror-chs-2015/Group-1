class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :street
      t.string :street_2
      t.string :city
      t.string :state
      t.integer :zip
      t.string :email
      t.string :github
      t.string :twitter
      t.text :photo
      t.string :number
      t.text :note
      t.text :ip_id
      t.timestamps null: false
    end
  end
end
