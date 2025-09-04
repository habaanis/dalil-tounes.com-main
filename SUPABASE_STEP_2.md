# 🔑 ÉTAPE 2 : Récupération des clés API Supabase

## 🎯 Objectif
Récupérer vos clés API pour connecter votre application à Supabase

## 📋 Ce que nous allons récupérer
- URL du projet Supabase
- Clé anonyme/publique (anon key)
- Clé service role (secrète)

---

## 🚀 ÉTAPE 2A : Accès aux paramètres API

### Action à faire MAINTENANT dans votre dashboard Supabase :

1. **Dans la sidebar gauche**, cherchez l'icône ⚙️ **"Settings"**
2. **Cliquez sur "Settings"**
3. **Dans le menu Settings**, cliquez sur **"API"**

Vous devriez maintenant voir une page avec vos informations API.

---

## 📋 ÉTAPE 2B : Copie des informations importantes

### Copiez ces 3 informations dans un fichier texte temporaire :

#### 1️⃣ **Project URL** (en haut de la page)
```
Exemple : https://abcdefghijk.supabase.co
```
**Votre URL** : `_________________`

#### 2️⃣ **anon/public key** (dans la section "Project API keys")
```
Commence par : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
**Votre clé anon** : `_________________`

#### 3️⃣ **service_role key** (dans la section "Project API keys")
```
Commence par : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
**Votre clé service_role** : `_________________`

---

## ⚠️ IMPORTANT - Sécurité

### 🔒 À propos de ces clés :

- **anon/public key** : ✅ Peut être utilisée côté client (sécurisée)
- **service_role key** : ⚠️ **SECRÈTE** - Ne jamais l'exposer publiquement !

### 💾 Sauvegarde recommandée :
1. **Créez un fichier texte** sur votre ordinateur
2. **Nommez-le** `dalil-tounes-keys.txt`
3. **Copiez-y** les 3 informations
4. **Sauvegardez** dans un endroit sûr

---

## 📝 Format de sauvegarde suggéré :

```
=== CLÉS SUPABASE - DALIL TOUNES ===
Date : [DATE D'AUJOURD'HUI]

Project URL : https://votre-projet.supabase.co
Anon Key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Service Role Key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

⚠️ ATTENTION : Ne jamais partager la Service Role Key !
```

---

## ✅ Vérification

Assurez-vous d'avoir :
- [ ] URL du projet (commence par https://)
- [ ] Clé anon (très longue, commence par eyJ...)
- [ ] Clé service role (très longue, commence par eyJ...)
- [ ] Tout sauvegardé dans un fichier sécurisé

---

## 🔄 Prochaine étape

Une fois que vous avez **copié et sauvegardé ces 3 informations**, dites-moi **"clés récupérées"** et nous passerons à la configuration de la base de données !

---

## 🆘 Problèmes ?

**Je ne trouve pas "Settings" :**
- Regardez dans la sidebar gauche
- Cherchez l'icône ⚙️ ou le mot "Settings"
- Scrollez vers le bas dans la sidebar

**Je ne vois pas "API" dans Settings :**
- Cliquez bien sur "Settings" d'abord
- Puis cherchez "API" dans le sous-menu

**Les clés sont trop longues :**
- C'est normal ! Elles font plusieurs centaines de caractères
- Utilisez Ctrl+A pour tout sélectionner, puis Ctrl+C pour copier

---

**🎯 PROCHAINE ÉTAPE : Configuration de la base de données (dès que vous avez les clés)**