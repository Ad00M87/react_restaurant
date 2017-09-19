50.times do
  Menu.create(
  name: Faker::Food.dish,
  description: Faker::Lorem.paragraph,
  price: Faker::Commerce.price.to_f
  )
end

puts 'Food Created'
