# 🚀 Guide de Déploiement en Production - Dalil Tounes

## ✅ ÉTAPE 1 : Préparation et Configuration Stripe

### 1.1 Activation du compte Stripe

**Action immédiate requise :**

1. **Connectez-vous à votre Dashboard Stripe** : https://dashboard.stripe.com
2. **Activez votre compte** :
   - Cliquez sur "Activer votre compte" dans la bannière
   - Complétez les informations de votre entreprise
   - Fournissez les documents d'identité requis
   - Ajoutez vos informations bancaires

⚠️ **Important** : L'activation peut prendre 1-7 jours selon votre pays.

### 1.2 Récupération des clés de production

Une fois votre compte activé :

1. Allez dans **Développeurs > Clés API**
2. Basculez sur **"Données en direct"** (Live data)
3. Copiez :
   - **Clé publiable** (commence par `pk_live_`)
   - **Clé secrète** (commence par `sk_live_`)

### 1.3 Configuration des webhooks de production

1. Allez dans **Développeurs > Webhooks**
2. Cliquez sur **"Ajouter un endpoint"**
3. **URL de l'endpoint** : `https://votre-projet-id.supabase.co/functions/v1/webhook`
   
   ⚠️ Remplacez `votre-projet-id` par votre vrai ID Supabase
   
4. **Événements à sélectionner** :
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

5. Cliquez sur **"Ajouter un endpoint"**
6. Copiez le **Secret de signature** (commence par `whsec_`)

---

## 📋 Checklist Étape 1

- [ ] Compte Stripe activé (peut prendre quelques jours)
- [ ] Clés de production récupérées
- [ ] Webhook de production configuré
- [ ] Secret de webhook copié

---

## 🔄 PROCHAINE ÉTAPE

Une fois l'étape 1 terminée, nous passerons à :
**ÉTAPE 2 : Configuration Supabase en production**

---

## 📞 Support

Si vous rencontrez des problèmes :
- Support Stripe : https://support.stripe.com
- Documentation : https://stripe.com/docs

---

**Status actuel : ÉTAPE 1 EN COURS**