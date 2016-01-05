students =
["Andrew Blum",
"Armani Saldana",
"Cecilia 'CJ' Joulain",
"Danielle Cameron",
"Daniel Woznicki",
"Eric Dell'Aringa",
"Gouron Paul",
"Isaac Lee",
"Jeremy Powell",
"Joseph Marion",
"Kai Huang",
"Kim Allen",
"Kyle Smith",
"Mark Janzer",
"Nicole Yee",
"Peter Wiebe",
"Steven Broderick"]

students.each do |student|
  User.create(name: student)
end

100.times do
  Badge.create(name: Faker::Company.buzzword, user_id: rand(1..17))
end
