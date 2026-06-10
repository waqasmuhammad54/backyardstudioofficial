@echo off
cd /d D:\Claude Project\Backyard\backyard-studio
python do_all.py > do_all_output.txt 2>&1
type do_all_output.txt
