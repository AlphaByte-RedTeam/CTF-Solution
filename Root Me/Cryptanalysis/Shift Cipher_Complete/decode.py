#!/bin/python2

hash = open('ch7.bin', 'rb').read()

i = -100
while 1 < 100:
	print(''.join([chr(ord(c) - i) for c in hash]))
	i += 1
