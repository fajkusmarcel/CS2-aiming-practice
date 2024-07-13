# CS2 training

## Aiming Practice Web App
Trénování sledování cípohybujícího cíle v herním poli pomocí myši nebo trénování rychlositi a přesnosti klikání (střílení) na cíl.


## CS2 Training Configurations

### DEATHMATCH 1xT vs 8xCT
```
sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; bot_kick; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_roundtime_defuse 60; mp_roundtime 60; mp_restartgame 1; mp_respawn_on_death_ct 1; mp_respawn_on_death_t 1; mp_ignore_round_win_conditions 1; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_difficulty 3; bot_dont_shoot 0; give weapon_awp; sv_infinite_ammo 1
```

### BOMB 1xT vs 8xCT
```
sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; bot_kick; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_roundtime_defuse 60; mp_roundtime 60; mp_restartgame 1;  bot_add_ct;bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_add_ct; bot_difficulty 3; give weapon_awp; sv_infinite_ammo 1 
```

### train
```
sv_cheats 1;mp_maxmoney 16000;mp_startmoney 16000;mp_roundtime 60;mp_roundtime_defuse 60;mp_roundtime_hostage 60;mp_freezetime 0;bind alt noclip;bot_stop 1;bind o bot_place;bind p "toggle sv_showimpacts 0 1";mp_restartgame 1
```

# CS2 příkazy
* sv_cheats 1**: Povolení cheatovacích příkazů na serveru.

## Nastavení botů
* mp_limitteams 0**: Zrušení limitu na počet hráčů v týmech, což umožňuje nepoměrné rozdělení hráčů mezi týmy.
* mp_autoteambalance 0**: Vypnutí automatického vyvažování týmů.
* bot_kick**: Vyhození všech botů ze hry.
* bot_add_t: Přidání bota do T týmu.
* bot_stop 1: Zastavení všech botů na místě. Boti se přestanou pohybovat, což je užitečné pro trénink střelby na stacionární cíle.
* bot_add_ct: Přidání bota do CT týmu.
* bot_difficulty 3**: Nastavení obtížnosti botů na 3 (nejvyšší obtížnost).
* bot_dont_shoot 0**: Povolení botům střílet (nastavení na 0 znamená, že mohou střílet).
* mp_teammates_are_enemies 1: Tento příkaz umožňuje, aby spoluhráči byli považováni za nepřátele, což je užitečné pro trénink střelby a reakčních časů ve smíšených týmech.

## Nastavení herního času a peněz 
* mp_roundtime_defuse 60**: Nastavení délky kola pro defuse mapy na 60 minut.
* mp_roundtime 60**: Nastavení délky kola na 60 minut.
* mp_roundtime_hostage 60: Nastavení délky kola pro hostage mapy (mapy, kde musí CT zachránit rukojmí) na 60 minut.
* mp_freezetime 0: Nastavení času zmrazení (freezetime) na začátku kola na 0 sekund, což znamená, že kolo začne okamžitě bez čekací doby

**mp_respawn_on_death_ct 1**: Povolení respawnu CT hráčů po smrti.
* mp_respawn_on_death_t 1**: Povolení respawnu T hráčů po smrti.
* mp_restartgame 1**: Restartování hry po 1 sekundě.
* mp_maxmoney 65535**: Nastavení maximální možné částky peněz pro hráče na 65535.
* mp_startmoney 65535**: Nastavení startovních peněz pro hráče na 65535.
* mp_afterroundmoney 65535**: Nastavení peněz, které hráči obdrží po každém kole, na 65535

## Nastavení zbraní a munice
* give weapon_ak47: Dát hráči zbraň AK-47.
* give weapon_m4a1: Dát hráči zbraň M4A1.
* give weapon_awp: Dát hráči zbraň AWP.
* sv_infinite_ammo 1**: Povolení nekonečného množství munice.
* bind g "give weapon_hegrenade;give weapon_flashbang;give weapon_smokegrenade;give weapon_molotov;give weapon_decoy": Připojení příkazů pro získání všech typů granátů k klávese "G". Tímto způsobem můžeš rychle získat granáty pro trénink.

## Vizualizace a trajektorie
* sv_grenade_trajectory 1: Zobrazuje trajektorii hozených granátů, což je užitečné pro trénink přesného házení granátů.
* sv_grenade_trajectory_time 10: Nastavuje dobu (v sekundách), po kterou je zobrazena trajektorie granátu. Tento příkaz je užitečný pro analýzu a přizpůsobení hodu granátu.

## Feautures
* bind alt noclip: Připojení příkazu "noclip" k klávese "Alt". "Noclip" umožňuje hráči létat a procházet skrze objekty.bot_stop 1: Zastavení všech botů na místě. Boti se přestanou pohybovat
* bind o bot_place: Připojení příkazu "bot_place" k klávese "O". Tento příkaz umístí bota na pozici, kde se právě nachází hráč
* bind p "toggle sv_showimpacts 0 1": Připojení příkazu k klávese "P", který přepíná zobrazení impaktů střel (kde střely zasáhly) mezi zapnutým (1) a vypnutým (0) stavem.




