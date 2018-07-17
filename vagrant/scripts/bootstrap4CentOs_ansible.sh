#!/bin/bash

#set -e

echo "Installing Ansible  on CentOS..." 


yum  install -y ansible
yum  install -y jq

cp /vagrant/ansible/ansible.cfg /etc/ansible/ansible.cfg

yum  install -y git

 
