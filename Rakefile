task :default => [:sync]

desc 'rsync the contents of ./_site to the server'
task :sync do
  puts '* Publishing files to live server'
  puts `rsync -avz --delete "_site/" user@domain.com:folder/`
end
