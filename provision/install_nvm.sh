echo Instalando NVM

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

# Cargar NVM
export NVM_DIR="/home/vagrant/.nvm"
echo "source \"$NVM_DIR/nvm.sh\"" >> /home/vagrant/.profile
source /home/vagrant/.profile

export NODE_VERSION='8.9.1'
nvm install $NODE_VERSION
nvm alias default $NODE_VERSION

# Instalar dependencias globales
npm install -g nodemon