# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = '2'

REQUIRED_PLUGINS        = %w()

plugins_to_install = REQUIRED_PLUGINS.select { |plugin| not Vagrant.has_plugin? plugin }
if not plugins_to_install.empty?
  puts "Instalando plugins: #{plugins_to_install.join(' ')}"
  if system "vagrant plugin install #{plugins_to_install.join(' ')}"
    exec "vagrant #{ARGV.join(' ')}"
  else
    abort "Algo fallo. Buscalo a Joaco!"
  end
end

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = 'ubuntu/artful64'  # 17.10
  config.vm.hostname = 'rails-dev-box'

  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  config.vm.network :forwarded_port, guest: 9797, host: 9797 # Express server

  config.vm.provision :shell, path: 'provision/os_setup.sh', keep_color: true
  config.vm.provision :shell, path: 'provision/install_yarn.sh', keep_color: true
  config.vm.provision :shell, path: 'provision/install_nvm.sh', keep_color: true, privileged: false
end
